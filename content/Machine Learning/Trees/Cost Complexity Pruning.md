We consider a sequence of trees alongside some tuning parameter $\alpha$ and wish to minimize the following
$$
\sum_{m=1}^{|T|} \sum_{i : x_i \in R_m} (y_i - \hat{y}_{R_m})^2 + \alpha |T|
$$
$|T|$ is the number of terminal nodes 
$R_m$ is the terminal node region

If we set $\alpha = 0$ then we will have $T_0$. $\alpha$ scales with the number of terminal nodes, $|T|$ so there is a *price* to pay for having many terminal nodes. 

We can then obtain a sequence of subtrees as a function of $\alpha$. (For some $\alpha$ we would get the best subtree)
