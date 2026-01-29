Also known as MLE.

Given some observations $x_1, x_2, ..., x_n$ and a known distribution (Bernoulli, Poisson etc. )we would like to estimate the distribution's parameters $\theta$ from the observed data. We denote the estimated parameter as $\hat{\theta}$.

We can use the Likelihood function denoted as $L$. 

Let $X_1, X_2, \dots, X_n$ be i.i.d. random variables with probability
mass function or density $f(x \mid \theta)$, where $\theta \in \Theta$.

$$
L(\theta \mid x_1,\dots,x_n)
= \prod_{i=1}^n f(x_i \mid \theta)
$$

The log-likelihood is

$$
\ell(\theta)
= \log L(\theta \mid x_1,\dots,x_n)
= \sum_{i=1}^n \log f(x_i \mid \theta)
$$

In practice, $f(x_i \mid \theta)$ would the the *pdf* of the distribution with $\theta$ parameters.

We use the log likelihood $\ell$ since it makes differentiating easier. To find the Maximum Likelihood Estimator for some distribution and observed value, we can take the first derivative of $\ell$ and set this function to $0$.

$$
\frac{d}{d\theta}\ell(\theta) = 0
$$

This is finding the global maximum of the likelihood function with respect the parameters. 