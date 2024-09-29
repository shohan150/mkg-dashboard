export default function Breadcrumb({module, route, nestedRoute}) {
    return (
    <h3 className="pl-4 xl:pl-2 my-5 text-lg text-white capitalize"> 
        <span className={`${route && "text-primary font-bold"}`}>{module} / </span> {route} {nestedRoute && `/ ${nestedRoute}`}</h3>
    );
}