Split Data into Training and Test sets and the model is fitted on Training Set. Fitted model is used on Test Set.

For instance we can have 70% Training Data and 30% Test Data. We would train the model on the 70% of Training Data and use the Fitted Model on the 30% Test Data.

This approach can be susceptible to [[Data Leakage]]. 

For example, finding the best $k$ in $K$ Nearest Neighbours using only Train and Test sets would result in [[Data Leakage]]. This is because we are *fitting* the model to the test set by adjusting $k$. 
