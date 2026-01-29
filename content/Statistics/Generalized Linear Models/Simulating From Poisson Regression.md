In `R` we can simulate $n$ Poisson random numbers using `rpois(n, lambda)`.

Recall, we have $\text{log}(\lambda_i)=\beta_0 +\beta_1x_i$

Then $\lambda_i = e^{\beta_0 + \beta_1x_i}$

>  We are using $i$ to emphasize observations

If we already know $\beta_0$ and $\beta_1$ from our `glm(...)` call from earlier, we can produce $\lambda$.

```r
lambda_vector <- exp(3.55 - 0.00166 * d)
n <- nrow(cigbutts)
simcounts <- rpois(n, lambda = lambda_vector)
```
