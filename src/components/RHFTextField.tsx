interface Props {
  type?: string;
  label: string;
  name: string;
  dir?: string;
  register: any;
  errors: any;
  isRequired?: boolean;
  validationSchema?: object;
}

const RHFTextField: React.FC<Props> = ({
  type = "text",
  label,
  name,
  dir = "rtl",
  register,
  errors,
  isRequired,
  validationSchema = {},
  ...rest
}) => {
  const errorMessages = errors?.[name];
  const hasError = !!(errors && errorMessages);
  return (
    <div className={`textField  `}>
      <label className="form-control">
        <div className="label">
          <span className="label-text lg:text-lg">
            {label}
            {isRequired && <span className="text-error mx-1">*</span>}
          </span>
        </div>
        <input
          autoComplete="off"
          type={type}
          id={name}
          dir={dir}
          {...register(name, validationSchema)}
          {...rest}
          className={`input input-primary input-bordered w-full shadow-md ${
            hasError ? "border-error" : ""
          }`}
        />
        <div className="label">
          <span className="label-text-alt">
            {errors && errors[name] && (
              <span className="text-red-600 block text-xs mt-2">
                {errors[name]?.message}
              </span>
            )}
          </span>
        </div>
      </label>
    </div>
  );
};

export default RHFTextField;
