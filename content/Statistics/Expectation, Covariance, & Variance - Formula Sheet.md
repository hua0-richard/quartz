Let $X, Y$ be random variables and $a, b, c \in \mathbb{R}$.

---

### Expectation (Always True)

$$
\mathbb{E}[c] = c
$$

$$
\mathbb{E}[aX] = a\,\mathbb{E}[X]
$$

$$
\mathbb{E}[X + Y] = \mathbb{E}[X] + \mathbb{E}[Y]
$$

$$
\mathbb{E}[aX + bY + c] = a\,\mathbb{E}[X] + b\,\mathbb{E}[Y] + c
$$

---

### Product Expectations

$$
\mathbb{E}[XY] \text{ has no simplification in general}
$$

If $X, Y$ are independent:
$$
\mathbb{E}[XY] = \mathbb{E}[X]\mathbb{E}[Y]
$$

---

### Covariance

$$
\mathrm{Cov}(X,Y) = \mathbb{E}[XY] - \mathbb{E}[X]\mathbb{E}[Y]
$$

$$
\mathrm{Cov}(X,Y) = \mathrm{Cov}(Y,X)
$$

$$
\mathrm{Cov}(X,c) = 0
$$

$$
\mathrm{Cov}(aX + b, Y) = a\,\mathrm{Cov}(X,Y)
$$

$$
\mathrm{Cov}(X, aY + b) = a\,\mathrm{Cov}(X,Y)
$$

If $X, Y$ are independent:
$$
\mathrm{Cov}(X,Y) = 0
$$

---

### Variance

$$
\mathrm{Var}(X) = \mathbb{E}[X^2] - (\mathbb{E}[X])^2
$$

$$
\mathrm{Var}(X) = \mathrm{Cov}(X,X)
$$

$$
\mathrm{Var}(c) = 0
$$

$$
\mathrm{Var}(X + c) = \mathrm{Var}(X)
$$

$$
\mathrm{Var}(aX) = a^2\,\mathrm{Var}(X)
$$

---

### Variance of Sums

$$
\mathrm{Var}(X + Y)
= \mathrm{Var}(X) + \mathrm{Var}(Y) + 2\,\mathrm{Cov}(X,Y)
$$

If $X, Y$ are independent:
$$
\mathrm{Var}(X + Y) = \mathrm{Var}(X) + \mathrm{Var}(Y)
$$

---

### Linear Combinations

$$
\mathrm{Var}(aX + bY + c)
= a^2\mathrm{Var}(X) + b^2\mathrm{Var}(Y) + 2ab\,\mathrm{Cov}(X,Y)
$$

If $X, Y$ are independent:
$$
\mathrm{Var}(aX + bY + c)
= a^2\mathrm{Var}(X) + b^2\mathrm{Var}(Y)
$$

---

### Second Moments

$$
\mathbb{E}[(X + Y)^2]
= \mathbb{E}[X^2] + \mathbb{E}[Y^2] + 2\,\mathbb{E}[XY]
$$

---

### Inequalities

$$
\mathrm{Var}(X) \ge 0
$$
