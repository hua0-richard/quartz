We have a binary class problem with output $Y = \{-1, 1\}$

Suppose we have a vector $X$ of predictors and a **Classifier** $G(X)$ we can produce a single prediction $\hat{y} \in Y$.

We have the following expression for error
$$\bar{err} = \frac{1}{N}\sum_{i=1}^{N}I(y_i \neq G(x_i))$$
>[!tip] Error
>This error expression is using an Indicator Function $I$ which counts the number of misclassified predictions. The error is a ratio of misclassified over values classified.

We define a weak classifier as one whose prediction is only slightly better than chance. 

The core idea behind the AdaBoost algorithm is to *chain* these weak learners and sequentially pass the data through them. The algorithm tries to add more *weight* to training examples which the previous classifiers have incorrectly classified. Since the goal of each classifier is to minimize the error, examples with higher weight will be paid more "attention" to and hopefully fixed. 

1. We set weight $w_i$ for each training example $(x_i, y_i)$ to be $1/N$ for $N$ training examples.
2. For $m = 1$ to $M$ 
	1. $G_m(x)$ is fit to the training data with $w_i$
	2. $\text{err}_m = \frac{\sum_{i=1}^{N} w_i \mathbb{I}(y_i \neq G_m(x_i))}{\sum_{i=1}^{N} w_i}.$
	3. $\alpha_m = \log((1 - err_m) / err_m)$
	4. $w_i \leftarrow w_i \exp[\alpha_m \mathbb{I}(y_i \neq G_m(x_i))],\; i = 1,2,\ldots,N.$
3. $G(x) = \operatorname{sign}\left[ \sum_{m=1}^{M} \alpha_m G_m(x) \right].$

For each classifier, we compute the weighted error and calculate alpha for the corresponding classifier. Then, update all the weights. Repeat this process for all the classifiers. The final result will the the sign $\{-,+\}$ produced by the classifier.

>[!tip] AdaBoost
>AdaBoost is very good and can outperform large classification trees. 
