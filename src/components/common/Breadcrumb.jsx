export default function Breadcrumb({module, route}) {
    return (
        <h3 className="my-5 text-lg text-white"> <span className="text-primary font-bold">{module} / </span> {route}</h3>
    );
}