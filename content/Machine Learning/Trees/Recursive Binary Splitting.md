Top down "Greedy" algorithm used to partition data by repeatedly splitting into two subsets.
### Method
1. We start with all observations in a single region and we split the points into two regions.
2. We take *one* of those two regions and we split that region again
3. Repeat
### Regression 

The goal is to find a good split of the predictor space. We would like to minimize the RSS.

$$\text{RSS}=\sum^J_{j=i}\sum_{i\in R_j}(y_i - \hat{y}_{R_j})^2$$
For regions $R_i$ for $i \in 1,2, ..., J$

In other words, across all regions, we would like to have the smallest residuals resulting from a split. Note, $\hat{y}_{R_j}$ is the mean response for observations in the $j^{\text{th}}$ region.

### Classification

We use the [[Gini Index]] as a substitute for RSS (in the case of regression) for classification. We could also use [[Cross Entropy]] or [[Residual Mean Deviance]]

### Determining the First Split

We set some $X_j$ as the first predictor we would like to divide. In the two resulting spaces, we would like to minimize the mean response.

We have the two regions $R_1, R_2$ and  $\forall (j, s)$

$R_1(j, s)= {X|X_j < s}$ and $R_2(j, s) = X|X_j \geq s$

such that we want $(j ,s)$ to minimize the RSS from the mean response in the resulting regions.

>[!tip] We want to find split some predictor $X_j$ at some point $s$ so that we have the smallest RSS.

This process is then repeated for each of the resulting regions. The region chosen for the split should have the smallest RSS and this process is recursively repeated for on child of the split. 

### Stopping Criterion

We could stop if there are $<5$ points in each region.
We could stop if the $\Delta \text{RSS} < \epsilon$.

### Limitations

This approach does not ensure that the best tree will be found.

