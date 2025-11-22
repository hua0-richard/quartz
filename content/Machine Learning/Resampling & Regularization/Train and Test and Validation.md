Instead of [[Train and Test]] we now split the Data into Train, Validation, and Test Sets.

For instance, we can have 50% Train, 20% Validation, 30% Test.

The model is trained on the Train set, and loss is determined by the validation set to guide hyperparameter tuning. For example, $k$ in $K$ NN would be tuned on the validation set. 
### Drawbacks
1. High Variance
2. Inefficient Use of Data
3. Single Evaluation
4. [[Overfitting]] Risk

