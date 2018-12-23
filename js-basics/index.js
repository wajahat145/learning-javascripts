var opt=prompt('input the operator to do calculation ');
calculate(opt);

            
            function calculate (opt)
            {
                if(opt=='+')
                {
    
                var n1=prompt('Input first number');
                var n2=prompt('Input second number'); 
                var result=parseInt(n1)+parseInt(n2);
                document.writeln(result+" Answer!");
                }           
                else if(opt=='-')
                {
    
                var n1=prompt('Input first number');
                var n2=prompt('Input second number'); 
                var result=parseInt(n1)-parseInt(n2);
                document.writeln(result+" Answer!");
                }     
                else if(opt=='*')
                {
    
                var n1=prompt('Input first number');
                var n2=prompt('Input second number'); 
                var result=parseInt(n1)*parseInt(n2);
                document.writeln(result+" Answer!");
                } 
                else if(opt=='/')
                {
    
                var n1=prompt('Input first number');
                var n2=prompt('Input second number'); 
                var result=parseInt(n1)/parseInt(n2);
                document.writeln(result+" Answer!");
                }
                
            if(parseInt(result)%2==0)
            {
                alert('Even Number');
                document.writeln(result+" Is Even Number");
            }
            else
           { 
                alert('Odd Number');
                document.write(result+" Is Odd Number");
            }

        }