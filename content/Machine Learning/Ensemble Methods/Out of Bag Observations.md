Observations that are not included in the bootstrap sample during bagging are referred to as Out of Bag Observations.

We use Out of Bag Observations in a similar way as a [[Concepts/Core/Machine Learning/Resampling & Regularization/Validation Set|Validation Set]] in [[Cross Validation]].

To predict a response for some variable, say $x_i$ we would choose all the trees whose bootstrap sample does not contain $x_i$. 
### Regression

In the case of regression, we have

$$\hat{y}_i^{\mathrm{OOB}} = \frac{1}{B_i} \sum_{b \in \mathrm{OOB}_i} \hat{y}_i^{(b)}$$
The predicted out of bag estimate is the average of all out of bag estimates from all the models.

For error, we would use the MSE.

### Classification

We take the majority vote class.

For error, we would use the misclassification rate.


