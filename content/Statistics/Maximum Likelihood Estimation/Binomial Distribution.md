
**Model**  
$$
X \sim \text{Binomial}(n,p), \quad p \in (0,1)
$$

**PMF**  
$$
P(X=x) = \binom{n}{x} p^x (1-p)^{n-x}, \quad x=0,1,\dots,n
$$

**Expected Value**  
$$
\mathbb{E}[X] = np
$$

**Variance**  
$$
\operatorname{Var}(X) = np(1-p)
$$

**Likelihood (single observation)**  
Given observed $x$:
$$
L(p \mid x) = \binom{n}{x} p^x (1-p)^{n-x}
$$

Ignoring constants:
$$
L(p) \propto p^x (1-p)^{n-x}
$$

**Likelihood (i.i.d. sample)**  
Let $X_1,\dots,X_m \sim \text{Binomial}(n,p)$ and
$$
S=\sum_{i=1}^m X_i
$$

$$
L(p \mid x_1,\dots,x_m)
= \prod_{i=1}^m \binom{n}{x_i} p^{x_i}(1-p)^{n-x_i}
$$

Ignoring constants:
$$
L(p) \propto p^S (1-p)^{mn-S}
$$

**Log-Likelihood**  
$$
\ell(p) = S\log p + (mn-S)\log(1-p) + C
$$
