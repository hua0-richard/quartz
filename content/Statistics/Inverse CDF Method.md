In our CDF we have $F(x) = P(X \leq x) = p$ with $0 \leq F(x) \leq 1$.

We take the inverse $F^{-1}(p)$. This is value $x$ such that $P(X \leq x) = p$.

We can think of about this in terms of quantiles.

For example,
- $0.5$ is the median
- $0.25$ is the first quartile
And so on.

> Think of the Inverse CDF as the quantile function. 

### Inverse Transform Sampling

Suppose we draw some Random Variable $U$ from a uniform distribution on the interval $(0, 1)$.

We set take $F^{-1}(U)$. Now, $F$ will return a value $X$ associated with the quantile value. We can say that $X$ follows the distribution of $F$. 
