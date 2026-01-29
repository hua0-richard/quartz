Recall Poisson $$P(X=x)=\frac{e^{-\lambda}\lambda^x}{x!}$$
Suppose we have some predictor $k$ $$\text{log}(\lambda) = \beta_0 + \beta_1k$$
We refer to the above function as a [[Link Function]] since it links $k$ to $\lambda$.

Suppose $X_i$ is the number of cigarette butts at the $i^{th}$ location. 

From Poisson, $\mathbb{E}[X] = \lambda_i$. We denote distance as $d_i$.

We have Log Likelihood $$\ell(\boldsymbol{\lambda} \mid \mathbf{x})
= \sum_{i=1}^n \left( x_i \log \lambda_i - \lambda_i - \log(x_i!) \right)$$
For Poisson we have the log likelihood function

$$\ell(\boldsymbol{\lambda} \mid \mathbf{x})
= \sum_{i=1}^n \left( x_i \log \lambda_i - \lambda_i - \log(x_i!) \right)$$
In this case, we wish to optimize for $\beta_0$ and $\beta_1$ where $\text{log}(\lambda_i) = \beta_0 + \beta_1 k_i$

As an example, we suspect there might be  a relationship between $\lambda_i$ and $d_i$. Fix $\beta_0 = 3.55$. Then $\text{log}(\lambda_i)=3.55 + \beta_1d_i$.

Now 
$$\text{log}(\lambda_i)=3.55 + \beta_1d_i \iff \lambda_i= e^{3.55 + \beta_1d_i}$$

Thus
$$\ell(\beta_1) = \sum_{i=1}^n \left[ x_i(3.55+\beta_1 d_i) - e^{\,3.55+\beta_1 d_i} - \log(x_i!) \right].$$
We take the first derivative and find the maximum.

We can use `glm(...)` in `R` to to fit Poisson Regression.

```r
cig.glm <- glm (x ~ d, family = poisson)
```
- In summary, we have some observations $x_i$. 
- For each observation $x_i$ we suspect it has some parameter $\lambda_i$ for Poisson.
- In this case, we suspect that some *predictor* $d _i$ is associated with $\lambda_i$ for each $x_i$.
- We aggregate our observations $x_i$ and construct a log likelihood for our Poisson distribution.
- In our example, we fixed $\beta_0$. However, we would typically optimize and find $\beta_0$ and $\beta_1$. 
- When fixing one value, we find the maximum of our log likelihood function.
- This optimization and easily be accomplished using `glm(...)`


