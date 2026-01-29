We use the logistic function to restrict the domain of $x$ to $[0,1]$$$p(x) = \frac{e^x}{e^x + 1}$$
If we express $p(x)$ in terms of $x$ we produce $$\text{logit}(p) = \text{log}(\frac{p}{1-p})$$

Refer to [[Odds]]

We have that the function $p$ is the logistic function and so it is restricted to produce values on $[0,1]$.

However, since we've taken the inverse of the logistic function, the logit function can take on any value.

With this, we set $\text{logit}(p(x)) =\beta_0 + \beta_1x$. This makes sense because a line has the range $[-\infty, \infty]$.

Once again, we say that the $\text{logit}$ is an example of a [[Link Function]].

This $\text{logit}$ function *links* the $p$ to a linear function.

We can fit the $\text{logit}$ function to some data
```r
p13.glm <- glm(y ~ x, data = p13.1, family = binomial)
```
This produces values for $\beta_0$ and $\beta_1$.

We have $$\text{logit}(p) = \beta_0 + \beta_1x$$
We rewrite in terms of $p$ and have $$p=\frac{e^{\beta_0+\beta_1x}}{1+e^{\beta_0+\beta_1x}}$$
We now simulate from the model since we know $\beta_0$ and $\beta_1$.

```r
p <- exp(6.0709-0.0177*p13.1$x)/(1+exp(6.0709-0.0177*p13.1$x)
n <- nrow(p13.1)
simy <- rbinom(n, 1, prob = p)
```





