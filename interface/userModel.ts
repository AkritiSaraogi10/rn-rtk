class UserModel {
  id: number;
  name: string;
  username: string;
  email: string;
  address: AddressModel;
  phone: string;
  website: string;
  company: CompanyModel;

  constructor({
    id,
    name,
    username,
    email,
    address,
    phone,
    website,
    company,
  }: {
    id: number;
    name: string;
    username: string;
    email: string;
    address: AddressModel;
    phone: string;
    website: string;
    company: CompanyModel;
  }) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.email = email;
    this.address = address;
    this.phone = phone;
    this.website = website;
    this.company = company;
  }

  static fromJson(json: any): UserModel {
    return new UserModel({
      id: json['id'],
      name: json['name'],
      username: json['username'],
      email: json['email'],
      address: AddressModel.fromJson(json['address']),
      phone: json['phone'],
      website: json['website'],
      company: CompanyModel.fromJson(json['company']),
    });
  }
}

class AddressModel {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoModel;

  constructor({street, suite, city, zipcode, geo}: AddressModel) {
    this.street = street;
    this.suite = suite;
    this.city = city;
    this.zipcode = zipcode;
    this.geo = geo;
  }

  static fromJson(json: any): AddressModel {
    return new AddressModel({
      street: json['street'],
      suite: json['suite'],
      city: json['city'],
      zipcode: json['zipcode'],
      geo: GeoModel.fromJson(json['geo']),
    });
  }
}

class GeoModel {
  lat: string;
  lng: string;

  constructor({lat, lng}: GeoModel) {
    this.lat = lat;
    this.lng = lng;
  }

  static fromJson(json: any): GeoModel {
    return new GeoModel({
      lat: json['lat'],
      lng: json['lng'],
    });
  }
}

class CompanyModel {
  name: string;
  catchPhrase: string;
  bs: string;

  constructor({name, catchPhrase, bs}: CompanyModel) {
    this.name = name;
    this.catchPhrase = catchPhrase;
    this.bs = bs;
  }

  static fromJson(json: any): CompanyModel {
    return new CompanyModel({
      name: json['name'],
      catchPhrase: json['catchPhrase'],
      bs: json['bs'],
    });
  }
}

export default UserModel;
