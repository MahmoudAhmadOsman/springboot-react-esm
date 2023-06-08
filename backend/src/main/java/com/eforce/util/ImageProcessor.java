package com.eforce.util;

import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.UUID;

@Component
public class ImageProcessor {

    // Give here images directory where you want to save images
    private static final String IMAGE_DIRECTORY_PATH = "C:/Users/fidow/OneDrive/Documents/java-react-2023/backend/src/main/resources/static/images/";


    public static String uploadImage(MultipartFile file) throws IOException {

        String originalFilename = file.getOriginalFilename();

        String randomUUID = UUID.randomUUID().toString();
        String fileName = randomUUID.concat(originalFilename.substring(originalFilename.lastIndexOf(".")));
        String filePath = IMAGE_DIRECTORY_PATH + File.separator + fileName;

        File f = new File(IMAGE_DIRECTORY_PATH);

        if (!f.exists()) {
            f.mkdir();
        }

        Files.copy(file.getInputStream(), Paths.get(filePath));
        return fileName;
    }
}
