#### Please use the [reference](https://github.com/virtual-labs/ph3-exp-dev-process/blob/main/pedagogy/README.org) document to fill this template.  Follow the [link](https://github.com/virtual-labs/ph3-exp-dev-process/tree/main/sample/pedagogy) to view a sample pedagogy document.

## Pedagogy
<p align="center">


<br>
<b> Experiment : Verification of Superposition and Thevenin's Theorem <a name="top"></a> <br>
</p>

<b>Discipline | Physical Science<b> 
:--|:--|
<b> Lab | Physics Lab<b> 
<b> Experiment|  Verification of Superposition and Thevenin's Theorem   <b> 


<h4> [1. Focus Area](#LO)
<h4> [2. Learning Objectives ](#LO)
<h4> [3. Instructional Strategy](#IS)
<h4> [4. Task & Assessment Questions](#AQ)
<h4> [5. Simulator Interactions](#SI)
<hr>

<a name="LO"></a>
#### 1. Focus Area :
|Sr. No |	Focus Area	|
|:--    |:--| 
|1.| Experimentation| 

#### 2. Learning Objectives and Cognitive Level


Sr. No |	Learning Objective	| Cognitive Level | Action Verb
:--|:--|:--|:-:
1.| To understand the concept of superposition theorem and its applications in circuit analysis.  <br>   | Understanding the concept | Verify  
2.| To be able to apply the superposition theorem to analyze and solve complex circuits with multiple sources and load elements.  <br>   |  Knowledge of basic laws  | Test   
3.| To understand the limitations and limitations of superposition theorem and its application in real-world circuits.  <br>   |  Mathematical skills  | Validate   
4.|  To understand the Thevenin's theorem and its applications in circuit analysis. <br>   | Analytical skills   | Check
5.|  To be able to find the Thevenin's equivalent circuit of a given network and apply it to simplify circuit analysis. <br>   |  Visualization skills  | Confirm
6.|  To understand the importance of Thevenin's theorem in solving complex circuits and its applications in real-world engineering problems. <br>   |  Familiarity with electronic components  | Evaluate
7.|  To develop the ability to compare and contrast superposition theorem and Thevenin's theorem, and to choose the appropriate theorem for solving different types of circuits. <br>   |  Familiarity with circuit analysis techniques  | Determine
8.| To understand the limitations of Thevenin's theorem and its applications, and to be able to recognize when it is not suitable for a particular circuit analysis problem.  <br>   |  Knowledge of network topology  | Analyze
9.| To develop the ability to analyze and solve circuits using both superposition theorem and Thevenin's theorem, and to compare and interpret the results obtained from each method.  <br>   |  Attention to detail  | Assess
10.| To build a solid foundation for further study in circuit analysis, electronics, and electrical engineering.  <br>   |  Practice  | Prove

<br/>
<div align="right">
    <b><a href="#top">↥ back to top</a></b>
</div>
<br/>
<hr>

<a name="IS"></a>
#### 3. Instructional Strategy
###### Name of Instructional Strategy  :    <u>   
The verification of superposition and Thevenin's theorem involves the application of these circuit analysis methods to determine the response of a linear, time-invariant circuit to a complex input.<br>
    
Here are the steps for verifying superposition theorem:<br>
    
1. Draw the circuit diagram and identify the independent sources.<br>
2. Turn off all but one of the independent sources and find the voltage or current response at the desired output point.<br>
3. Repeat the process for each of the remaining independent sources.<br>
4. Sum the responses from each source to find the total response at the output.<br>
    
And the steps for verifying Thevenin's theorem:<br>
  
1. Draw the circuit diagram and simplify it as much as possible.<br>
2. Remove the load and find the open-circuit voltage (Voc) at the output terminals.<br>
3. Replace the load with a short circuit and find the short-circuit current (Isc) at the output terminals.<br>
4. Use the values of Voc and Isc to create a Thevenin equivalent circuit, which is comprised of a voltage source (Voc) in series with a resistor (Rth).<br>
5. Find the value of Rth by measuring the resistance across the output terminals with the independent sources turned off.<br>
6. Replace the original circuit with the Thevenin equivalent circuit and reconnect the load.<br>
7. Determine the response of the circuit to the input using the Thevenin equivalent circuit.<br>
    
It's important to note that both superposition and Thevenin's theorem are applicable only to linear, time-invariant circuits.<br>
    
###### Assessment Method:   
1. Verification of Superposition Theorem:<br>
    a. Network Analysis: Using a multimeter, measure the current flowing through each resistor and calculate the total current. Then, compare the results obtained by applying the superposition theorem.<br>
    b. Simulation: Using software such as LTSpice or PSpice, simulate the network and compare the results with the actual measurement.<br>
    c. Graphical Analysis: Plot the equivalent resistance of the network and compare it with the actual measurement.<br>

2. Verification of Thevenin's Theorem:<br>
    a. Network Analysis: Using a multimeter, measure the voltage across the load resistor and calculate the current flowing through it. Then, compare the results obtained by applying the Thevenin's theorem.<br>
    b. Simulation: Using software such as LTSpice or PSpice, simulate the network and compare the results with the actual measurement.<br>
    c. Graphical Analysis: Plot the equivalent resistance and equivalent voltage of the network and compare it with the actual measurement.<br>

<u> <b>Description: </b>    </u>
<br>
A. Verification of Superposition Theorem:<br>
    
The Superposition Theorem states that in a linear circuit, the response (current or voltage) in any branch is the sum of the responses caused by each independent source acting alone, while all other sources are turned off (replaced by their internal resistances).<br>
    
To verify the Superposition Theorem, the following steps can be followed:
1. Turn off all sources except one and calculate the response in the circuit.
2. Repeat the same process for each source and record the responses.
3. Finally, add up all the responses obtained from each source to get the overall response in the circuit.
4. Compare the overall response obtained in step 3 with the response obtained by considering all sources turned on. If the two responses match, then the Superposition Theorem has been verified.

B. Verification of Thevenin's Theorem:<br>
    
Thevenin's Theorem states that any linear two-terminal circuit can be replaced by a single voltage source and a single resistor in series, as viewed from the two terminals.<br>
 
To verify Thevenin's Theorem, the following steps can be followed:<br>
 
1. Replace all independent sources with their internal resistances.<br>
2. Calculate the open-circuit voltage (Voc) by measuring the voltage across the two terminals with no load connected.<br>
3. Calculate the equivalent resistance (Req) by measuring the resistance between the two terminals with no voltage source connected.<br>
4. Connect a test load across the two terminals and measure the current flowing through the load.<br>
5. Calculate the voltage across the load using Ohm's Law (V = IR).<br>
6. Compare the voltage across the load obtained in step 5 with the voltage obtained by using the Thevenin equivalent circuit (Voc in series with Req and the test load). If the two voltages match, then the Thevenin's Theorem has been verified.
    

<br/>
<div align="right">
    <b><a href="#top">↥ back to top</a></b>
</div>
<br/>
<hr>

<a name="AQ"></a>
#### 4. Task & Assessment Questions:

  
<br>

Sr. No |	Learning Objective	| Task to be performed by <br> the student  in the simulator | Assessment Questions as per LO & Task
:--|:--|:--|:-:
1.|   <br>  |   <br>  | <br> 
2.|   <br>  |   <br>  | <br> 


<div align="right">
    <b><a href="#top">↥ back to top</a></b>
</div>
<br/>
<hr>

<a name="SI"></a>

#### 4. Simulator Interactions:
<br>

Sr.No | What Students will do? |	What Simulator will do?	| Purpose of the task
:--|:--|:--|:--:
1.|  <br> | <br> |   
2.|  <br> | <br> |
