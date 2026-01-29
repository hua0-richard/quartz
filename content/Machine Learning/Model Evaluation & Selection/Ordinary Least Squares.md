For [[Regression]] the loss function is (Sum of Squares Error)

$L(\beta) = \|y - X\beta\|^2$

where $y$ is the output from the training data and $X\beta$ are feature and coefficient vectors respectively.

We take the Euclidean Length of the difference between the outputs in the training data and the coefficient vector.

This produces the loss function. This function is quadratic and so we can produce a closed form solution for the global minimum.

We can also use the Mean Squared Error as the loss function

$L(\beta) = \frac{1}{n}\|y - X\beta\|^2$

