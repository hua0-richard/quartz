1. Split Data into [[Train Set|Training]] and [[Test Set|Test]] sets
2. Use [[K-fold Cross Validation|Cross Validation]] on the **Training Data**
	- Compare Models (logistic regression, KNN)
	- Tune Hyperparameters ($k$, $\lambda$)
3. Choose model with smallest loss from cross validation. 
4. Retrain model on all training data
5. Evaluate loss on final tuned model.


