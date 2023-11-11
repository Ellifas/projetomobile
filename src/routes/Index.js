import { createStackNavigator } from '@react-navigation/stack';
import TelaInicial from '../pages/telaInicial/TelaInicial';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import RegisterScreen from '../pages/register/RegisterScreen';
import FinalizarCompra from '../pages/finalizarCompra/FinalizarCompra';
import CompraDeJogo from '../pages/compraDeJogo/CompraDeJogo';
import AdicionarJogo from '../pages/adicionarJogo/AdicionarJogo';

const Stack = createStackNavigator();
export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TelaInicial"
        component={TelaInicial}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FinalizarCompra"
        component={FinalizarCompra}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CompraDeJogo"
        component={CompraDeJogo}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AdicionarJogo"
        component={AdicionarJogo}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
