This is called the $L2-\text{norm}$

Refer to the [[Lp Norms]]

$R(B) = \|\beta\|^2 = \sum_j \beta^2_{j}$

Ordinary Least Squares with Penalty

$$L(\beta) = \frac{1}{n} ||\textbf{y} - \textbf{X}\beta||^2 + \lambda R(\beta)$$

Substituting for $R(\beta)$. We can see that we are using the $L2$ norm.
$$L(\beta) = \frac{1}{n} ||\textbf{y} - \textbf{X}\beta||^2 + \lambda\sum_j \beta^2_{j}$$