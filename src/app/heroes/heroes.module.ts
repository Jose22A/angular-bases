import { NgModule } from "@angular/core";
import { Heroe } from "./components/heroe/heroe";
import { Lista } from "./components/lista/lista";

@NgModule({
  imports: [],
  exports: [Heroe, Lista],
  declarations: [Heroe, Lista],
  providers: []
})
export class HeroesModule {}
