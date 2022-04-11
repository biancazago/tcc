import { MenuItem } from "primeng";

export class PrimengUtil {
  public static criarMenuItem(label, routerLink, icon): MenuItem {
    return {
      icon: icon,
      routerLink: routerLink,
      label: label
    };
  }
}
