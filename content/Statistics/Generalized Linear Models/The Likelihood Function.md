In our regular likelihood function we would have $f(x_i \mid \theta)$.

With [[Generalized Linear Models]] we have $f(x_i \mid \theta_i(\beta))$. This means that each observation has its own parameters (set of parameters).

For example, suppose we have a random variable which follows a Poisson distribution. Denote this random variable as $Y_i$ with parameter $\lambda_i$.

Suppose we can approximate the rate for each observation $Y_i$ with some relationship like $\lambda_i = exp(\beta_0 + \beta_1x)$ for some $x_i$ associated with each $\lambda_i$.

Then, our likelihood function would be as follows 
$$
L(\beta_0, \beta_1) = \frac{e^{-(\beta_0 + \beta_1x)}(\beta_0 + \beta_1x)^{y_i}}{y_i!}
$$