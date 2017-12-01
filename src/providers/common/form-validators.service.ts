import {Injectable} from "@angular/core";
import {Validators as angularValidators, AbstractControl} from '@angular/forms';

@Injectable()
export class FormValidators extends angularValidators {

  /*E-mail*/
  public static email(control: AbstractControl) {
    return FormValidators.validatorsByPattern('email', control, '([a-z0-9]*[-_]?[a-z0-9]+)*@([a-z0-9]*[-_]?[a-z0-9]+)+[\.][a-z]{2,3}([\.][a-z]{2})?');
  };

  /*手机号码*/
  public static phone(control: AbstractControl) {
    return FormValidators.validatorsByPattern('phone', control, '1[0-9]{10,10}');
  };

  /*中文*/
  public static chinese(control: AbstractControl) {
    return FormValidators.validatorsByPattern('chinese', control, '[(\u4e00-\u9fa5)]+');
  };

  /*英文、数字包括下划线*/
  public static legallyNamed(control: AbstractControl) {
    return FormValidators.validatorsByPattern('legallyNamed', control, '[A-Za-z0-9_]+');
  };

  private static validatorsByPattern(name: string, control: AbstractControl, pattern: string) {
    let validatorFn = FormValidators.pattern(pattern)(control);
    if (validatorFn != null) {
      validatorFn[name] = validatorFn['pattern'];
    }
    return validatorFn;
  };
}