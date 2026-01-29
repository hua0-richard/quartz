Boosting is another [[Ensemble Methods|ensemble method]].

Boosting will combine the outcome of many trees to tackle Bias.

In Boosting, trees are grown sequentially. The predictions of Trees are added together. In the case of boosting, smaller trees are preferred.

### Method

In boosting, a *forest* of decision trees are made with the number of splits commonly being $1, 4, 8, 32$. We refer to these trees as "weak learners".

Each tree is fit to the residuals obtained from the previous tree. With each iteration is there is a learning parameter $\lambda$ which is multiplied by the predicted to slow learning.

1. Set $\hat{f}(x)=0$ and $r_i = y_i$ for all $i$ in the set $(X, r)$  
2. For $b = 1, ... , B$ do
	1. For a tree $\hat{f}_b$ with $d$ splits and $d + 1$ terminal nodes to $(X, r)$
	2. We add a shrunken version of the decision tree $\hat{f}(x) \leftarrow \hat{f}(x) + \lambda \hat{f}_b(x)$
	3. Update the residuals $r_i \leftarrow r_i - \lambda\hat{f}_b(x)$
3. Output the boosted model $\hat{f}(x) = \sum^B_{b=1}\lambda\hat{f}_b(x)$

>[!tip] Parameters
>$B$ is the number of fits
>$\lambda$ is the learning rate (0.01, 0.001)
>$d$ is the interaction depth or complexity. For $d$ internal nodes there are $d + 1$ terminal nodes

### Advantages
Improved Accuracy. The Boosting procedure slowly "corrects" what the previous models did not account for.

Reduced Overfitting. The Boosting algorithm starts with "weak learners" (stumps) which learn slowly to the data. 

Robustness. Boosting is able to handle noisy data and adapts well to misclassified points.



