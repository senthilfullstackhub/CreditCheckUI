const axios = require('axios');

// To get the decision response from decision check microservices 
// where it provide service decision with details.

exports.check = function (req, res, next) {
  const formData = req.body;

  let data = {
    FirstName: formData.firstName,
    LastName: formData.lastName,
    DateOfBirth: formData.dob,
    Salary: formData.income
  }
  
    axios({
      method: 'post',
      url: 'http://localhost:8080/api/Customers',
      data: data,
      headers: {'Content-Type': 'application/json; charset=utf-8' }
      })
      .then(response => {
  
      let serviceDecision = '';
      let serviceAPR = '';
      let bankName = '';
      let cardType = '';
      let promotionMsg = '';
      let purchaseRate = '';
      let creditLimit = '';
  
      if(response.data.isEligible)
      {
        serviceDecision = 'Eligible';
        serviceAPR = response.data.customerCard.apr;
        bankName = response.data.customerCard.bankName;
        cardType = response.data.customerCard.cardType;
        promotionMsg = response.data.customerCard.promotionMsg;
        purchaseRate = response.data.customerCard.purchaseRate;
        creditLimit = response.data.customerCard.creditLimit;
      }
      else{
        serviceDecision = 'NotEligible';
      }
      
      res.status(200).send({
              firstName: response.data.firstName,
              lastName: response.data.lastName,
              dob: response.data.dateOfBirth,
              income: response.data.salary,
              timestampLog: response.data.createdOn,
              serviceDecision: serviceDecision,
              apr: serviceAPR,
              cardType: cardType,
              bankName: bankName,
              promotionMsg: promotionMsg,
              purchaseRate: purchaseRate,
              creditLimit: creditLimit
          });    
    })
    .catch((error) => {
        console.log(error)
        res.status(500).send({apiErrorMessage: 'Internal Server Error'})
    });


}