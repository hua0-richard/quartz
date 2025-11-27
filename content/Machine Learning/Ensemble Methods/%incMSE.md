This is how much worse a model gets when a certain feature is randomly shuffled.

We calculate the [[Out of Bag]] MSE for the set of $B$ trees in the [[Random Forests|Random Forest]]. Denote this $\text{MSE}_{full}$.

Randomly shuffle observations. 

Carry out predictions and calculate $\text{MSE}_{shuff}$ 

Determine the following quantity

$$\frac{\text{MSE}_{shuff} - \text{MSE}_{full}}{\text{MSE}_{full}}$$
Higher values of %incMSE mans the variable is more important.