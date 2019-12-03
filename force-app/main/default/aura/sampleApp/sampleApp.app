<aura:application extends="force:slds">
    <!-- Self Contained Component -->
    <div>
        <!-- c:sampleComp msg="Simple Calculator" /--> <!-- new c:sampleComp(); -->
    </div>
    
    <div>
        <!-- c:sampleComp / -->
    </div>
    
    <div>
        <c:calculatorComp firstNumber="200" secondNumber="100"/>
    </div>
    
    <div>
        <c:contactFormComp/>
    </div>
</aura:application>