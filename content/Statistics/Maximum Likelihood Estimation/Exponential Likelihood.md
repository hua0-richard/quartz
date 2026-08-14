---
tags: [Statistics, Maximum-likelihood, Exponential]
---

### Exponential Distribution Log-Likelihood

#### Probability Density Function
$$
f(x \mid \lambda) = \lambda e^{-\lambda x}, \quad x \ge 0
$$

---

### Log-Likelihood

#### Single Observation
Given one observation \( x \):
$$
\ell(\lambda \mid x) = \log \lambda - \lambda x
$$

#### Sample of \( n \) Observations
For independent observations $x_1, \dots, x_n$:
$$
\ell(\lambda \mid x_1,\dots,x_n)
= \sum_{i=1}^n \log(\lambda e^{-\lambda x_i})
= n \log \lambda - \lambda \sum_{i=1}^n x_i
$$

---

### Maximum Likelihood Estimator (MLE)

Taking the derivative and setting it to zero:
$$
\hat{\lambda} = \frac{n}{\sum_{i=1}^n x_i} = \frac{1}{\bar{x}}
$$

See also: Exponential Distribution
