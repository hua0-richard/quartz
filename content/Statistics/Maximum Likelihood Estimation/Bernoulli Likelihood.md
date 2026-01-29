**Model**  
$$
X \sim \text{Bernoulli}(p), \quad p \in (0,1)
$$

**PMF**  
$$
P(X=x) = p^x(1-p)^{1-x}, \quad x \in \{0,1\}
$$

**Likelihood (single observation)**  
$$
L(p \mid x) = p^x(1-p)^{1-x}
$$

**Likelihood (i.i.d. sample)**  
Let $X_1,\dots,X_n \sim \text{Bernoulli}(p)$ and $k=\sum_{i=1}^n X_i$.

$$
L(p \mid x_1,\dots,x_n) = p^k(1-p)^{n-k}
$$

**Log-Likelihood**  
$$
\ell(p) = k\log p + (n-k)\log(1-p)
$$
