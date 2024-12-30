"use client";

import { useEffect, useState, useMemo } from "react";
import { AgGridReact } from "ag-grid-react";
import { ColDef, Theme } from "ag-grid-community";
import { themeQuartz, colorSchemeDarkBlue } from "ag-grid-community";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";

ModuleRegistry.registerModules([AllCommunityModule]);

interface Commit {
  sha: string;
  commit: {
    author: {
      name: string;
      date: string;
    };
    message: string;
  };
  html_url: string;
}

interface ICellRendererParams {
  data: Commit;
  value: string;
}

function GitHistorySkeleton() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-4 gap-4">
        {/* Header skeleton */}
        <div className="h-8 animate-pulse rounded bg-gray-700/50" />
        <div className="h-8 animate-pulse rounded bg-gray-700/50" />
        <div className="col-span-2 h-8 animate-pulse rounded bg-gray-700/50" />
      </div>
      {/* Rows skeleton */}
      {[...Array(10)].map((_, i) => (
        <div key={i} className="grid grid-cols-4 gap-4">
          <div className="h-6 animate-pulse rounded bg-gray-700/30" />
          <div className="h-6 animate-pulse rounded bg-gray-700/30" />
          <div className="col-span-2 h-6 animate-pulse rounded bg-gray-700/30" />
        </div>
      ))}
    </div>
  );
}

const customTheme = themeQuartz.withPart(colorSchemeDarkBlue).withParams({
  fontFamily:
    "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
  headerFontFamily:
    "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
  cellFontFamily:
    "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
});

export function GitHistory() {
  const [rowData, setRowData] = useState<Commit[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const columnDefs = useMemo<ColDef<Commit>[]>(
    () => [
      {
        field: "sha",
        headerName: "Commit Hash",
        width: 100,
        cellRenderer: (params: ICellRendererParams) => {
          return (
            <a
              href={params.data.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300"
            >
              {params.value.substring(0, 7)}
            </a>
          );
        },
      },
      {
        field: "commit.author.name",
        headerName: "Author",
        width: 150,
      },
      {
        field: "commit.message",
        headerName: "Message",
        flex: 1,
      },
      {
        field: "commit.author.date",
        headerName: "Date",
        width: 200,
        cellRenderer: (params: ICellRendererParams) => {
          return new Date(params.value).toLocaleDateString();
        },
      },
    ],
    [],
  );

  const defaultColDef = useMemo<ColDef>(
    () => ({
      sortable: true,
      filter: true,
    }),
    [],
  );

  const theme = useMemo<Theme>(() => customTheme, []);

  useEffect(() => {
    async function fetchCommits() {
      try {
        const response = await fetch("/api/git-history");
        const data = await response.json();
        setRowData(data);
      } catch (error) {
        console.error("Error fetching commit history:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCommits();
  }, []);

  if (isLoading) {
    return <GitHistorySkeleton />;
  }

  return (
    <div className="ag-theme-alpine-dark h-[600px] w-full">
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        theme={theme}
        pagination={true}
        paginationPageSize={10}
        domLayout="autoHeight"
      />
    </div>
  );
}
