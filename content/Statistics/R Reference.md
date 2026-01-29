Random Number Simulations
```r
runif(n, min=0, max=1)     # U(a,b)
rnorm(n, mean=0, sd=1)     # N(mean, sd^2)
rexp(n, rate=1)            # Exp(rate)
rpois(n, lambda=3)         # Poisson
rbinom(n, size=1, prob=.3) # Bernoulli if size=1
```
Probability Helpers
```r
dnorm(x, mean=0, sd=1)   
# Returns the value of the Normal probability density function at x
# This is f(x), NOT a probability (area under the curve)

pnorm(x, mean=0, sd=1)   
# Returns P(X <= x) for a Normal random variable
# Used to compute probabilities via CDF differences:
#   P(a < X <= b) = pnorm(b) - pnorm(a)

qnorm(p, mean=0, sd=1)   
# Returns the quantile x such that P(X <= x) = p
# Used for inverse-CDF simulation and confidence intervals

dpois(y, lambda)         
# Returns the Poisson probability mass function at y
# This is P(Y = y) for Y ~ Poisson(lambda)

ppois(y, lambda)         
# Returns P(Y <= y) for a Poisson random variable
# Used to compute cumulative probabilities

qpois(p, lambda)         
# Returns the smallest integer y such that P(Y <= y) >= p
# Used for inverse-CDF simulation and percentile calculations
```
Computing Probabilities
```r
pnorm(b) - pnorm(a)      # P(a < Z <= b)
```
Inverse
```r
U <- runif(n)
X <- Finv(U)   # you define Finv <- function(u) ...
```
Simulate MA / AR / ARMA / ARIMA
```r
# MA(1): theta = 0.9
x <- arima.sim(n=1000, model=list(ma=c(0.9)))

# MA(2): theta1=0.5, theta2=0.7
x <- arima.sim(n=1000, model=list(ma=c(0.5, 0.7)))

# AR(1): phi=0.6
x <- arima.sim(n=1000, model=list(ar=c(0.6)))

# ARMA(1,1): phi=0.5, theta=0.7
x <- arima.sim(n=1000, model=list(ar=c(0.5), ma=c(0.7)))

# ARIMA(1,1,1): differencing built in
x <- arima.sim(n=1000, model=list(order=c(1,1,1), ar=c(0.5), ma=c(0.7)))
```
GLM and Poisson
```r
fit <- glm(y ~ x, family=poisson(link="log"))
summary(fit)
coef(fit)
fitted(fit)
```
Logistic Regression
```r
fit <- glm(y ~ x, family=binomial(link="logit"))
summary(fit)
```