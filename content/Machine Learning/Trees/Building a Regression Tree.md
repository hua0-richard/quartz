1. Use [[Recursive Binary Splitting]] to grow the [[Classification and Regression Trees (CART)|Tree]]
2. Apply [[Cost Complexity Pruning]]. We obtain trees as a function of $\alpha$ by minimizing the equation in Cost Complexity Pruning.
3. Use [[K-fold Cross Validation]] to find the best $\alpha$. Average the results for $\alpha$ and pick some $\alpha$ to minimize the MSE. 

>[!tip] K-Fold Cross Validation
> For each fold $i$ for $i \in 1,2,...k$  we will have scores $S_{\alpha_1}^i, S_{\alpha_2}^i, S_{\alpha_3}^i$. Then for some $\alpha_p$ and score $S_{\alpha_p}^i$ we will average those scores take $\alpha$ which produced the smallest scores.

 