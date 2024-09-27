import React, { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";

export function Form(){
    const [heigth, setHeight] = useState (''); 
    const [weight, setWeight] = useState ('');
    const [ imc, setImc] = useState('');

function imcCalculator(){
    //to fixed = ponto flutuante = limitar o numero de casas decimais
     let totalImc = (weight/(heigth*heigth)).toFixed(2)

     setImc(totalImc)
}

function validatorImc()
{
    if(weight != '' && heigth != '') {
      imcCalculator()
        setHeight('')
        setWeight('')
    }
}

    return (
        <View>
            <View>
           <Text>Altura:</Text>
           <TextInput
              placeholder="Ex. 1.75"
              value={heigth}
           />

           <Text>Peso:</Text>
           
           <TextInput
             placeholder="Ex. 67.5"
             value={weight}
           />
             <Pressable
               onPress={() => validatorImc()}
            >
                <Text>Calcular</Text>
            </Pressable>

              <Text>{imc}</Text>
           </View>
        </View>
    );
} 