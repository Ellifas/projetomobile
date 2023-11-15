import { createStackNavigator } from '@react-navigation/stack';
import TelaInicial from '../pages/telaInicial/TelaInicial';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import RegisterScreen from '../pages/register/RegisterScreen';
import FinalizarCompra from '../pages/finalizarCompra/FinalizarCompra';
import CompraDeJogo from '../pages/compraDeJogo/CompraDeJogo';
import AdicionarJogo from '../pages/adicionarJogo/AdicionarJogo';
import MinhasCompras from '../pages/minhasCompras/MinhasCompras';

// Criação do navegador de pilha (Stack Navigator)
const Stack = createStackNavigator();

// Componente de navegação principal
export default function Routes() {
  return (
    <Stack.Navigator>
      {/* Configurações para a tela inicial */}
      <Stack.Screen
        name="TelaInicial"
        component={TelaInicial}
        options={{ headerShown: false }} // Oculta o cabeçalho da tela
      />
      {/* Configurações para a tela de login */}
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }} // Oculta o cabeçalho da tela
      />
      {/* Configurações para a tela de registro */}
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{ headerShown: false }} // Oculta o cabeçalho da tela
      />
      {/* Configurações para a tela principal (Home) */}
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }} // Oculta o cabeçalho da tela
      />
      {/* Configurações para a tela de finalização de compra */}
      <Stack.Screen
        name="FinalizarCompra"
        component={FinalizarCompra}
        options={{ headerShown: false }} // Oculta o cabeçalho da tela
      />
      {/* Configurações para a tela de compra de jogo */}
      <Stack.Screen
        name="CompraDeJogo"
        component={CompraDeJogo}
        options={{ headerShown: false }} // Oculta o cabeçalho da tela
      />
      {/* Configurações para a tela de adição de jogo */}
      <Stack.Screen
        name="AdicionarJogo"
        component={AdicionarJogo}
        options={{ headerShown: false }} // Oculta o cabeçalho da tela
      />
      {/* Configurações para a tela de histórico de compras */}
      <Stack.Screen
        name="MinhasCompras"
        component={MinhasCompras}
        options={{ headerShown: false }} // Oculta o cabeçalho da tela
      />
    </Stack.Navigator>
  );
}
