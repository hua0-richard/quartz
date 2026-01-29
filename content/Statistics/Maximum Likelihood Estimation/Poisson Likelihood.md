$$
X \sim \text{Poisson}(\lambda), \quad \lambda > 0
$$
**PMF**  
$$
P(X=x) = \frac{e^{-\lambda}\lambda^x}{x!}, \quad x=0,1,2,\dots
$$
**Likelihood (single observation)**  
$$
L(\lambda \mid x) = \frac{e^{-\lambda}\lambda^x}{x!}
$$
**Likelihood (i.i.d. sample)**  
Let $X_1,\dots,X_n \sim \text{Poisson}(\lambda)$ and $S=\sum_{i=1}^n X_i$.

$$
L(\lambda \mid x_1,\dots,x_n)
= e^{-n\lambda}\lambda^S \prod_{i=1}^n \frac{1}{x_i!}
$$
Ignoring constants:
$$
L(\lambda) \propto e^{-n\lambda}\lambda^S
$$
**Log-Likelihood**  
$$
\ell(\lambda) = S\log\lambda - n\lambda + C
$$
