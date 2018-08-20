import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <p className="test">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae velit at justo gravida egestas eget eget mauris. Quisque ante mi, consequat sit amet magna convallis, luctus volutpat turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque sollicitudin, diam id mattis egestas, nibh odio condimentum libero, et varius turpis dolor non turpis. Suspendisse vel pharetra quam. Sed placerat volutpat elementum. Vestibulum lorem nulla, efficitur eget ex quis, malesuada hendrerit augue. Sed tincidunt lacinia quam, vitae volutpat est aliquam et. Curabitur elementum sit amet diam at convallis. Vestibulum faucibus finibus risus, id maximus ex sollicitudin nec. Etiam et tincidunt lectus.

        Pellentesque congue purus <a>Ipsum </a> ornare lacus condimentum suscipit quis eu urna. In hac habitasse platea dictumst. Vivamus commodo, nibh quis porttitor luctus, sapien enim aliquet est, eget luctus nibh neque a arcu. Cras tortor justo, sodales sed enim sit amet, euismod sollicitudin neque. Vestibulum sapien mauris, dapibus eget aliquam in, consequat sed tellus. Proin sit amet diam a ex posuere rhoncus. Donec facilisis at enim et hendrerit. Vivamus non ornare lorem.
        
        Sed auctor elit vel orci cursus ultrices. Nulla auctor tortor vel velit lacinia posuere. Vestibulum eleifend risus vitae purus luctus, sit amet congue sapien tincidunt. Morbi ut erat sem. Ut feugiat vestibulum risus, a blandit leo sollicitudin non. Vestibulum vehicula tristique ligula at blandit. Nunc auctor nisl et enim sollicitudin, sed accumsan nibh faucibus. Nullam tortor nisi, luctus ut arcu vel, tempor finibus risus.
        
        In fermentum libero sem, sit amet fermentum tellus posuere ac. Pellentesque vitae euismod tortor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris quis pretium arcu. Pellentesque vitae magna sit amet orci ultricies aliquam sed eget nisl. Suspendisse gravida, ante eget aliquam malesuada, ante eros ornare ipsum, eu rhoncus massa nisi eu lorem. Ut sit amet accumsan sem. Aenean ac nisl velit. Quisque at nisl quis est pretium tempus id ac purus. In pharetra ac metus non convallis. Praesent gravida euismod lacinia. Suspendisse vitae sollicitudin nisl. Aliquam nec purus nec sem elementum varius.
        
        Duis sapien odio, luctus sed dignissim vel, interdum molestie eros. Donec rutrum orci eget gravida feugiat. Duis at mattis magna. Nunc mattis ligula quis nunc laoreet facilisis sed ac augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam fringilla congue dui at luctus. Nulla gravida, metus nec egestas sollicitudin, eros augue eleifend justo, at volutpat ex sem ut tortor. Vivamus finibus ligula in enim porttitor, et efficitur ante tincidunt. Duis augue est, feugiat id eleifend ac, egestas et turpis. Cras sed purus ut tellus hendrerit commodo. Sed quis convallis leo, ut pretium risus. Etiam eu orci suscipit, porta ante id, auctor eros. Donec lacinia molestie porttitor. Cras luctus ligula vel mi viverra gravida.
        
        Curabitur nibh ligula, bibendum id felis ac, congue feugiat felis. Pellentesque gravida ut libero nec sodales. Suspendisse sodales libero ut magna imperdiet posuere. Suspendisse ut purus eget ipsum commodo hendrerit pretium at mauris. Aliquam a odio imperdiet, feugiat urna egestas, mollis arcu. Duis a interdum mauris, sed tempor augue. Aliquam sem ex, feugiat vel euismod et, malesuada quis arcu. Etiam eu massa id nisi varius lacinia. Phasellus vitae viverra urna. Mauris elit orci, eleifend at est sit amet, maximus rutrum arcu.
        
        Aenean rhoncus ante gravida auctor pharetra. Morbi sodales, metus pharetra sollicitudin posuere, lorem lacus fringilla elit, sed posuere magna turpis sit amet orci. Duis vestibulum vestibulum urna vitae congue. Nullam molestie magna non augue ultricies, consequat blandit velit commodo. Sed placerat eros ac dapibus porta. Vestibulum blandit elit at libero luctus fringilla. Praesent varius tortor elementum mi sodales consectetur. Sed non tortor ut metus molestie laoreet. Fusce quis ante auctor, sagittis diam id, mollis massa. Quisque non tincidunt purus. Nunc justo est, interdum sit amet tellus nec, suscipit rutrum mauris. Vestibulum id erat eu arcu lobortis scelerisque. In eu nibh quis nibh maximus egestas. Donec sagittis, quam sed placerat cursus, felis dolor scelerisque nisi, ut lacinia mi est eu arcu. Donec dapibus enim sed egestas ullamcorper. Sed luctus lorem orci, ut semper augue ullamcorper eget.
        
        Donec scelerisque porttitor condimentum. Phasellus ultrices eleifend rutrum. Cras pharetra egestas ornare. Donec vulputate mi non ligula venenatis bibendum. Mauris ultrices laoreet felis ac varius. Nam magna arcu, iaculis ac venenatis quis, malesuada sit amet lectus. Nam libero orci, tincidunt a tortor et, porta dictum lectus. Ut tincidunt urna ac enim laoreet, dapibus vulputate eros consequat. Phasellus nec dui ac nibh iaculis convallis. Nulla facilisi. Mauris ornare, magna sit amet mollis laoreet, mi diam fringilla purus, vel accumsan est lorem at velit. Mauris vel tincidunt libero. Ut venenatis sollicitudin ipsum in varius. Nulla mattis eu sem sit amet gravida. Fusce sit amet tempus lacus, id ultrices ante.
        
        Aenean nec bibendum massa, sed rutrum ex. Etiam auctor sollicitudin mi quis iaculis. Donec ante enim, gravida vel suscipit sit amet, sodales non massa. Donec eget magna placerat massa venenatis suscipit a at ipsum. Integer nibh tortor, auctor vel mauris non, pharetra pretium ipsum. Etiam non massa tortor. Pellentesque fringilla dui hendrerit diam convallis, eget vestibulum lacus semper. Aliquam et sapien urna.
        
        Integer eget ex congue, aliquam lorem ac, tempus sapien. Nunc laoreet lacinia ligula malesuada rhoncus. Mauris finibus sapien sed ligula ornare fermentum. Nunc id finibus quam. Nullam sit amet nunc ut ex pharetra bibendum. In id ultrices odio. Etiam cursus dolor eu sem scelerisque, vitae cursus mi consectetur. Curabitur nisl velit, tempus vitae sem et, fringilla blandit ante. In tempus augue nec eros feugiat, sit amet consectetur dolor ultrices. Donec eu est vitae elit ultricies mattis. Vivamus eget sapien quis diam pharetra commodo et in augue. In viverra lorem ut urna ullamcorper condimentum. Phasellus in arcu eget nulla tempor finibus at sed nunc. In sit amet nisi enim. Sed finibus purus id vulputate venenatis.</p>
        <Footer />
        </div>
    );
  }
}

export default App;
