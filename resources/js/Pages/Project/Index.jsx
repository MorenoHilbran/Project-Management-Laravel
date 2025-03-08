import AuthenticatedLayout from "../../Layouts/AuthenticatedLayout.jsx";
import { useState } from 'react';
import Pagination from "../../Components/Pagination";
import { Head } from "@inertiajs/react";

export default function Index({ auth, projects }) {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    // Calculate total pages
    const totalPages = Math.ceil(projects.data.length / itemsPerPage);

    // Get current projects
    const indexOfLastProject = currentPage * itemsPerPage;
    const indexOfFirstProject = indexOfLastProject - itemsPerPage;
    const currentProjects = projects.data.slice(indexOfFirstProject, indexOfLastProject);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Projects
                </h2>
            }
        >
            <Head title="Projects" />
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-gray-50 shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                    <tr className="text-nowrap">
                                        <th className="px-3 py-2">ID</th>
                                        <th className="px-3 py-2">Image</th>
                                        <th className="px-3 py-2">Name</th>
                                        <th className="px-3 py-2">Status</th>
                                        <th className="px-3 py-2">Create Date</th>
                                        <th className="px-3 py-2">Due Date</th>
                                        <th className="px-3 py-2">Created By</th>
                                        <th className="px-3 py-2">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentProjects.map((project) => (
                                        <tr key={project.id} className="bg-white border-b hover:bg-gray-50">
                                            <td className="px-3 py-2">{project.id}</td>
                                            <td className="px-3 py-2"><img src={project.image_path} alt={project.name} className="w-10 h-10 object-cover" /></td>
                                            <td className="px-3 py-2">{project.name}</td>
                                            <td className="px-3 py-2">{project.status}</td>
                                            <td className="px-3 py-2">{new Date(project.created_at).toLocaleDateString()}</td>
                                            <td className="px-3 py-2">{new Date(project.due_date).toLocaleDateString()}</td>
                                            <td className="px-3 py-2">{project.created_by}</td>
                                            <td className="px-3 py-2">
                                                <button className="text-blue-600 hover:text-blue-900">Edit</button>
                                                <button className="text-red-600 hover:text-red-900 ml-2">Delete</button>
                                            </td>
                                        </tr>
                                    ))}   
                                </tbody>
                            </table>
                            <Pagination 
                                currentPage={currentPage} 
                                totalPages={totalPages} 
                                onPageChange={setCurrentPage} 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
