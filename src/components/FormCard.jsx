export default function FormCard({ children }) {
    return (
        <section className=" flex flex-col shadow-md shadow-blue-100 rounded-lg p-4  gap-6  bg-white">
            {children}
        </section>
    )
}