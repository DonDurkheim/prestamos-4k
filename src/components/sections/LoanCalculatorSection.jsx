import React, { useState, useEffect } from 'react';

const LoanCalculatorSection = () => {
  const [loanAmount, setLoanAmount] = useState(150000);
  const [loanTerm, setLoanTerm] = useState(24);
  const [loanType, setLoanType] = useState('personal'); // 'personal' or 'secured'
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('es-DO', { style: 'currency', currency: 'DOP' }).format(amount).replace('DOP', 'RD$');
  };

  useEffect(() => {
    const calculateMonthlyPayment = () => {
      const baseAmount = parseFloat(loanAmount);
      const term = parseFloat(loanTerm);
      const monthlyRate = loanType === 'personal' ? 0.04 : 0.03; // 4% for personal, 3% for secured
      
      // Add 6% legal expenses to the total capital
      const totalAmountWithExpenses = baseAmount * 1.06;
      
      // Calculate simple interest over the term on the total amount
      const totalInterestAmount = totalAmountWithExpenses * monthlyRate * term;
      
      // Grand total to be paid including capital, expenses, and total interest
      const grandTotal = totalAmountWithExpenses + totalInterestAmount;
      
      // Monthly payment is the grand total divided by the term
      const payment = grandTotal / term;

      setMonthlyPayment(Math.ceil(payment));
    };

    calculateMonthlyPayment();
  }, [loanAmount, loanTerm, loanType]);

  return (
    <section id="calculadora" className="py-20 bg-gradient-to-r from-primary/10 to-accent/10 dark:from-primary/5 dark:to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Calcula tu <span className="text-primary">Préstamo</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Utiliza nuestra calculadora para estimar el monto de tu cuota mensual según el préstamo que necesites.
            </p>
            
            <div className="glass-card rounded-2xl p-8">
              <div className="mb-6">
                <label className="block text-gray-700 dark:text-gray-300 font-medium mb-4">
                  Tipo de Préstamo
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => setLoanType('personal')}
                    className={`p-4 rounded-xl text-center transition-all duration-300 ${
                      loanType === 'personal'
                        ? 'bg-primary text-white'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    Préstamo Personal
                    <div className="text-sm mt-1">4% mensual</div>
                  </button>
                  <button
                    onClick={() => setLoanType('secured')}
                    className={`p-4 rounded-xl text-center transition-all duration-300 ${
                      loanType === 'secured'
                        ? 'bg-primary text-white'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    Préstamo Prendario
                    <div className="text-sm mt-1">3% mensual</div>
                  </button>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="loan-amount" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                  Monto del préstamo
                </label>
                <div className="flex items-center mb-2">
                  <span className="text-gray-500 mr-2">RD$</span>
                  <input 
                    type="range" 
                    id="loan-amount" 
                    min="10000" 
                    max="500000" 
                    step="10000" 
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(e.target.value)}
                    className="w-full range-thumb"
                  />
                </div>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>RD$10,000</span>
                  <span>RD$500,000</span>
                </div>
                <div className="mt-4 text-center">
                  <span className="text-2xl font-bold text-primary">{formatCurrency(loanAmount)}</span>
                </div>
              </div>
              
              <div className="mb-8">
                <label htmlFor="loan-term" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                  Plazo (meses)
                </label>
                <div className="flex items-center mb-2">
                  <input 
                    type="range" 
                    id="loan-term" 
                    min="6" 
                    max="60" 
                    step="6" 
                    value={loanTerm}
                    onChange={(e) => setLoanTerm(e.target.value)}
                    className="w-full range-thumb"
                  />
                </div>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>6 meses</span>
                  <span>60 meses</span>
                </div>
                <div className="mt-4 text-center">
                  <span className="text-2xl font-bold text-primary">{loanTerm} meses</span>
                </div>
              </div>
              
              <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 text-center">
                <p className="text-gray-600 dark:text-gray-300 mb-2">Cuota mensual estimada</p>
                <p className="text-3xl font-bold text-primary">{formatCurrency(monthlyPayment)}</p>
                <p className="text-sm text-gray-500 mt-2">
                  * Tasa de interés: {loanType === 'personal' ? '4%' : '3%'} mensual
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  * Incluye gastos de cierre
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="glass-card rounded-2xl p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                ¿Por qué elegir <span className="text-primary">Préstamos 4K</span>?
              </h3>
              
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="flex-shrink-0 bg-primary/10 rounded-full p-2">
                    <i className="fas fa-bolt text-primary text-lg"></i>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Decisiones y fondos rápidos</h4>
                    <p className="text-gray-600 dark:text-gray-300 mt-1">
                      Proceso ágil para recibir dinero en tiempo récord, a menudo el mismo día.
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="flex-shrink-0 bg-primary/10 rounded-full p-2">
                    <i className="fas fa-percentage text-primary text-lg"></i>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Tasas bajas y pagos flexibles</h4>
                    <p className="text-gray-600 dark:text-gray-300 mt-1">
                      Condiciones adaptadas a tu capacidad financiera con las mejores tasas del mercado.
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="flex-shrink-0 bg-primary/10 rounded-full p-2">
                    <i className="fas fa-check-circle text-primary text-lg"></i>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Aprobación simple y sin estrés</h4>
                    <p className="text-gray-600 dark:text-gray-300 mt-1">
                      Sistema optimizado para calificar sin burocracia ni requisitos complicados.
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="flex-shrink-0 bg-primary/10 rounded-full p-2">
                    <i className="fas fa-headset text-primary text-lg"></i>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Asesoramiento personalizado</h4>
                    <p className="text-gray-600 dark:text-gray-300 mt-1">
                      Nuestro equipo te acompaña paso a paso durante todo el proceso.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="absolute -z-10 w-full h-full bg-primary/10 rounded-2xl -bottom-4 -right-4"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoanCalculatorSection; 