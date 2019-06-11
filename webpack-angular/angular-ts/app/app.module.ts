import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
//
// 入新的 AppComponent ，并把它添加到 NgModule
// 装饰器的 declarations 和 bootstrap 字段中
@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

// 所以根模块需要从 @angular/platform-browser
// 中导入 BrowserModule 并添加到 imports 数组中。
