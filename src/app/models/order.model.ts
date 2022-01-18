import { Item } from './item.model';
import { User } from './user.model';

export class Order {
  id?: number;
  orderNumber: string;
  address: string;
  zipcode: string;
  city: string;
  paymentMethod: string;
  totalPrice: number;
  items: Item[];
  user: User;
  date: Date;

  constructor(id: number, orderNumber: string, address: string, zipcode: string, city: string, paymentMethod: string, totalPrice: number, items: Item[], user: User, date: Date) {
    this.id = id;
    this.orderNumber = orderNumber;
    this.address = address;
    this.zipcode = zipcode;
    this.city = city;
    this.paymentMethod = paymentMethod;
    this.totalPrice = totalPrice;
    this.items = items;
    this.user = user;
    this.date = date;
  }
}
