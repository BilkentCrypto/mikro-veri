
import { Input } from "@material-tailwind/react";

export default function ListElement(props) {

    const {veriTuru, veriIcerigi} = props;

    return (

        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

            <td  class="py-4 px-6 text-xl bg-transparent font-medium text-gray-900 whitespace-nowrap dark:text-white">
               {veriTuru}
            </td>
                
            <Input placeholder= {veriIcerigi}  scope="row" class="py-4 bg-transparent font-medium text-xl px-6">
                
            </Input>
          
        </tr>
    )
}