
Let us understand Thevenin’s Theorem with the help of an example. The circuit diagram shown below consists of a network connected to a load resistor R<sub>L</sub>.

<img src="images/Thevenin_Circuit_1.png" width="350" height="400">

Step 1: Remove the Load Resistor R<sub>L</sub>


The open-circuit voltage across these terminals is known as V<sub>th</sub>, calculated using standard circuit analysis techniques.


Step 2: Find the Thevenin Resistance R<sub>th</sub>
Now deactivate all independent sources:

Replace voltage sources with a short circuit.

Replace current sources with an open circuit.

Then, calculate the equivalent resistance across the open terminals. This resistance is called R<sub>th</sub>.


Step 3: Thevenin Equivalent Circuit
Now construct the Thevenin equivalent circuit using the calculated values of V<sub>th</sub> and R<sub>th</sub>. Connect the load resistor R<sub>L</sub> back to this simplified circuit.


Step 4: Calculate Load Current
The load current I<sub>L</sub> flowing through R<sub>L</sub> can be calculated using Ohm’s Law:


Where:

V<sub>th</sub> = Thevenin Voltage

R<sub>th</sub> = Thevenin Resistance

R<sub>L</sub> = Load Resistance

Conclusion:
Thevenin’s Theorem allows you to simplify a complex circuit into a simple two-component equivalent, making analysis easier—especially when studying the effect of varying the load resistor R<sub>L</sub>.



Let us understand the superposition theorem with the help of an example. The circuit diagram is shown below consists of two voltage sources V<sub>1</sub> and V<sub>2</sub>.

 <!-- ![image](https://user-images.githubusercontent.com/98012700/217304122-aa3706d3-f8a0-47af-a092-876425759e8c.png) -->
 <img src="images/Circuit_1.png" width="350" hight="400">
 
First, take the source V<sub>1</sub> alone and short circuit the V<sub>2</sub> source as shown in the circuit diagram below:
<!-- ![image](https://user-images.githubusercontent.com/98012700/217304494-62328f59-34f4-4a46-b13b-c7c00b4a7227.png)  -->
 <img src="images/Circuit_2.png" width="350" hight="400">

Here, the value of current flowing in each branch, i.e. i<sub>1</sub>', i<sub>2</sub>' and i<sub>3</sub>' is calculated by the following equations.
<!-- ![image](https://user-images.githubusercontent.com/98012700/217305129-cbc9e99c-99a5-4354-8fb4-91e8ebd91831.png) -->
 <img src="images/Formula_1.png" width="350" hight="400">

 
The difference between the above two equations gives the value of the current i<sub>3</sub>'.
<!-- ![image](https://user-images.githubusercontent.com/98012700/217305586-9389fe98-8c42-4243-adb2-4b0ce6362062.png) -->
 i₃′ = i₁′ − i₂′......(3)
 
Now, activating the voltage source V<sub>2</sub> and deactivating the voltage source V<sub>1</sub> by short-circuiting it, find the various currents, i.e. i<sub>1</sub>'', i<sub>2</sub>'', i<sub>3</sub>'' flowing in the circuit diagram shown below

<!-- ![image](https://user-images.githubusercontent.com/98012700/217305849-9d408e13-e7db-4240-9c59-c7b116693c90.png) -->
 <img src="images/Circuit_3.png" width="350" hight="400">


 
Here,


<!-- ![image](https://user-images.githubusercontent.com/98012700/217306030-dfc9435b-701e-47a6-9f02-e0335d76fd24.png) -->
 i₂″ = V₂ / [(r₁·r₃) / (r₁ + r₃) + r₂] ———(4)  
 
 and   
 
 i₁″ = i₂″ · (r₃ / (r₁ + r₃))———-(5)

 
And the value of the current i<sub>3</sub>'' will be calculated by the equation shown below:


<!-- ![image](https://user-images.githubusercontent.com/98012700/217306152-4610d819-6fa7-4f3b-aae0-48c1a9ada923.png) -->
 i₃″ = i₂″ − i₁″———(6)

 
 
As per the superposition theorem, the value of current i1, i2, i3 is now calculated as:


<!-- ![image](https://user-images.githubusercontent.com/98012700/217306273-d7f4504c-0981-44b0-9f3c-74e2ebedec44.png) -->
i₃ = i₃′ + i₃″ ——(7)

i₂ = i₂′ − i₂″——(8)

i₁ = i₁′ − i₁″———(9)

 

The direction of the current should be taken care of while finding the current in the various branches.
