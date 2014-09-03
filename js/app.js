angular.module("waitStaffCalc", [])
       .controller("WaitStaffCalcController", function(){
          this.data={
            basePrice : 0.0,
            taxRate : 0.0,
            tipPercentage : 0.0,
            subTotal : 0.0,
            tip : 0.0,
            total : 0.0,
            tipTotal : 0.0,
            mealCount : 0.0,
            avgTip : 0.0
          };

          this.submit = function(){
            this.data.subTotal = this.data.basePrice + this.data.basePrice*(this.data.taxRate/100);
            this.data.tip = this.data.subTotal * (this.data.tipPercentage/100);
            this.data.tipTotal += this.data.tip;
            this.data.mealCount++;
            this.data.avgTip = this.data.tipTotal/this.data.mealCount;
            this.data.total = this.data.subTotal + this.data.tip;
          };

          this.cancel = function(){
            this.data.basePrice = 0.0;
            this.data.taxRate = 0.0;
            this.data.tipPercentage = 0.0;
          };

          this.reset = function(){
            //I could do this.data="" but I wanted the default values as placeholders. 
            //Anyway to do this without recreating the object?
              this.data={
              basePrice : 0.0,
              taxRate : 0.0,
              tipPercentage : 0.0,
              subTotal : 0.0,
              tip : 0.0,
              total : 0.0,
              tipTotal : 0.0,
              mealCount : 0.0,
              avgTip : 0.0
            };
          };
});

