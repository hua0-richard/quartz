### Method

Splits data based on binary rules. The model predicts based on which region data falls under. Regions can only be split horizontally or vertically.

To build the tree, use a method called [[Recursive Binary Splitting]]

### Regression

The goal is to find a good split of the predictor space. We would like to minimize 

$$\text{RSS}=\sum^J_{j=i}\sum_{i\in R_j}(y_i - \hat{y}_{R_j})^2$$
For regions $R_i$ for $i \in 1,2, ..., J$

In other words, across all regions, we would like to have the smallest residuals. Also. $\hat{y}_{R_j}$ is the mean response for observations in the $j^{\text{th}}$ region.

### Classification
