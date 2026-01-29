After fitting a model, we would like to know if the model could have actually generated the real data.

>[!tip] Assume the fitted model is correct. Simulated data from the fitted model should *look* similar (likelihood terms) to the observed data.

- Treat the fitted model as cannon
- Simulate many datasets from it via [[Parametric Bootstrap]]
- Compare the observed data

Refer to [[Poisson Regression]] and the cigarette butt data.
```r
y.glm = glm(count ~ distance, family = poisson, data = cigbutts)
```
We now have the parameters $\beta_0$ and $\beta_1$ in our [[Generalized Linear Models]].

Now, for each observation we compute the log likelihood. 

Now, we use the parametric bootstrap to simulate many data points. We refit the model to each simulated dataset and compute the log likelihoods for each new data point.

We then produce a sampling distribution of likelihood contributions. 

### Step 1
We create 50 covariate values
```r
n <- 50
runif(n, min = 0, max = 10)
```
We use the link function. In this case, we need to remember **each observation has its own poisson mean**.
```r
theta <- 3 - .2*x
lambda <- exp(theta)
```
We now generate poisson random variables
```r
y <- rpois(n, lambda = lambda)
```
### Step 2
We fit the model
```r
y.glm <- glm(y ~ x, family = poisson)
```
We extract the intercept and slope. This would be $\beta_0$ and $\beta_1$

```r
a <- coef(y.glm)[1]
b <- coef(y.glm)[2]
```
We now find the log likelihood values of each observation.
```r
llikelihoodValues <- log(dpois(y, lambda = exp(a + b*x)))
```
### Step 3

Simulate 40 bootstrap datasets. For each bootstrap data set we will using `glm(...)` to fit the the link function and determine the parameters from the link function. Then we will determine the log likelihood values of each observation (from the parameters found in `glm(...)`)  and store those results.

```r
loglikelihoodValues <- log(dpois(y, lambda = exp(a + b*x)))
```
In the above we are computing the log likelihood contribution of each observation in the fitted model. 

```r
dpois(...)
```
returns a conditional probability for an observation given a `lambda` parameter.

So it is obvious (refer to [[Link Function]]) that this now produces the log likelihood.

>[!tip] How plausible is this observation if the model were true?

### Complete Code Block
```r
n <- 50; x <- runif(n, min = 0, max = 10)
theta <- 3 - .2*x; lambda <- exp(theta)
y <- rpois(n, lambda = lambda)
y.glm <- glm(y ~ x, family = poisson)
a <- coef(y.glm)[1]; b <- coef(y.glm)[2]
llikelihoodValues <- log(dpois(y, lambda = exp(a + b*x))) 

simloglike <- function(x, y.glm, N=40) {
	ll <- matrix(0, ncol=length(x), nrow=N)
	for (j in 1:N) {
		y <- simulate(y.glm)$sim_1
		sim.glm <- glm(y ~ x, family = poisson)
		a <- coef(sim.glm)[1]
		b <- coef(sim.glm)[2]
		loglikelihoodValues <- log(dpois(y, lambda = exp(a + b*x)))
		ll[j, ] <- loglikelihoodValues
	}

	ll <- data.frame(ll) #names(ll) <- as.character(x)
	names(ll) <- "" 
	ll
	}
```

We can now plot the data
```r
simlike <- simloglike(x, y.glm)
par(mar=c(1, 4, .1, .1))
boxplot(simlike, ylim=range(c(llikelihoodValues,range(simlike)) ))
points(llikelihoodValues, pch=16, col=2)
```

![[images/Plot_Model_Checking.png]]

- Each Box Plot is the distribution of likelihood contributions from bootstrap.
- The **Red Dots** are observed likelihood contributions
- If Red Dots fall within boxes, the model mostly fits
- If we have many low Red Dots, the model is bad
- Note that the black dots are individual bootstrap log likelihood values

In summary, we can use parametric bootstrap, `glm(...)` and the link function to generate a *distribution* for each observation. Note that in this example, it is $\lambda_i$ for each $x_i$ via $\beta_0$ and $\beta_1$ for the link function. We have a *distribution* because we assume the observation follows Poisson and we have the $\mu$ of Poisson which is our $\lambda_i$. Now, for each observation, will sample from that observation's distribution. The collection of these samples is our bootstrap sample. Next, we refit the model to the bootstrap sample using `glm(...)`(and thus the link function) and we will then have new estimates for $\beta_0$ and $\beta_1$ for our current bootstrap sample. Next, we use the link function to recompute $\lambda$ for our particular bootstrap sample. From this, we can use `dpois` to compute the log likelihood for our particular observation. Effectively, we are quantifying the likelihood of this particular observation given the lambda parameter. This is repeated 40 times in our case. Consequently, we have a *sampling distribution* (actualized distribution) for each observation $x_i$. Finally, we use our distributions and compare with the observed data. In this case, the observed data are the red dots. If the red dots fall within the box and whisker plots, we can say that our model is "ok". 
