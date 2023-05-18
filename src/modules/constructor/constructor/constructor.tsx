import { FontContent } from "@/common/api/controllers/font/types";
import { FileWithPath } from "@mantine/dropzone";
import React, { useState } from "react";
import FontConvert from "../fontConvert";
import FontDisplay from "../fontDisplay";
import FontUpload from "../fontUpload";

const Constructor: React.FC = () => {
	const [sourceFile, setSourceFile] = useState<FileWithPath>();
	const [font, setFont] = useState<FontContent>();
	const [force, setForce] = useState(false);

	const onForceClick = () => {
		setFont(undefined);
		setForce(true);
	};

	return (
		<div id="constructor">
			{sourceFile === undefined && (
				<FontUpload onDrop={(f) => setSourceFile(f[0])} />
			)}
			{sourceFile && font === undefined && (
				<FontConvert
					sourceFile={sourceFile}
					onConvert={setFont}
					force={force}
				/>
			)}
			{font !== undefined && (
				<FontDisplay font={font} onForcePrerenderClick={onForceClick} />
			)}
		</div>
	);
};

export default React.memo(Constructor);
