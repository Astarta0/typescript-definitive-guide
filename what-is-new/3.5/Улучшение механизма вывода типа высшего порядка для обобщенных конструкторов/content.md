##Улучшение механизма вывода типа высшего порядка для обобщенных конструкторов

В *TypeScript* версии `v3.4` был усовершенствован механизм вывода типов для обобщенных функций реализующих функциональную композицию. Это в свою очередь повысило эффективность использования   *функциональных-hoc* при разработке *React-приложений*. С выходом версии `v3.5` подобный механизм был перенесен на конструкторы классов, что также повысило эффективность вывода типов при использования их в качестве *классовых-hoc*.

`````typescript
type ComponentClass<P> = new (props: P) => Component<P>;
declare class Component<P> {
    props: P;
    constructor(props: P);
}

type HocProps = { hocProp: string; }
declare function hoc<WrappedProps>(WrappedComponent: ComponentClass<WrappedProps>): ComponentClass<WrappedProps & HocProps> ;

type NestedProps<T> = { nestedProp: T };
class CustomComponent<T> extends Component<NestedProps<T>> {}

/**
 * <v3.5
 * const WrappedComponent: ComponentClass<NestedProps<{}> & HocProps>
 * 
 * >=v3.5
 * const WrappedComponent: new <T>(props: NestedProps<T> & HocProps) => Component<NestedProps<T> & HocProps>
 * 
 */
const WrappedComponent = hoc(CustomComponent);
`````
