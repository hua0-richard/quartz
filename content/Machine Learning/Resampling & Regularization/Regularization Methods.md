### Overview

Discourages overly complex models and reduces variance. 
Regularization regularizes regression using the following cost function

$$L(\beta) = \frac{1}{n} ||\textbf{y} - \textbf{X}\beta||^2 + \lambda R(\beta)$$

We have that $\lambda R(\beta)$ as a **penalty** term where $\lambda$ is a **regularization parameter**.

[[Ridge Regression]]
[[LASSO]]

### Regression Method

If we set $\lambda = 0$ then we have OLS.

$$L(\beta) = \frac{1}{n} ||\textbf{y} - \textbf{X}\beta||^2 + 0 \times R(\beta)$$
As we increase $\lambda$ we would have larger and larger penalty values. Thus, there will be a tradeoff between the size of the coefficients the the model fit on the training data. This penalty term will reduce variance and introduce more bias.

### Geometric Intuition (2D)

For Ridge and Lasso, there is a 2D geometric interpretation. For all pairs of coefficients $\beta_1$ and $\beta_2$ we can bound a *Diamond* or *Circle* as for possible point pairs. 

The *Rings* are the values produce by the Loss Function for each of $\beta_1$ and $\beta_2$

The centre of the *Rings* is where the loss function is minimized. With the penalty term in mind, we wish to find the pair with the shortest (straight line) distance to the centre. We can see in $L1$ that this results in one of the terms, in this case $\beta_2$ being "snapped" to zero. In the $L2$ case we can see this as the a combination of both coefficients. 

ridge_lasso_2d.png

Note that, in general, as $\lambda$ increases, the constraint region (circle, diamonds) will become smaller.

In addition, as $\lambda$ increases, the coefficients $\beta_i$ will become smaller.


